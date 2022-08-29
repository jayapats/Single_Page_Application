from django.shortcuts import render
from django.http import HttpResponse
from oic.oic import Client #pip install oic
from oic.utils.authn.client import CLIENT_AUTHN_METHOD
from oic import rndstr
from oic.utils.http_util import Redirect
from oic.oic.message import AuthorizationResponse



#http://127.0.0.1:9000/ugcbackend/myapp/
def welcomeUGC(request):
    return render(request,'ugc.html')

def auth_oidc_codeflow(self):
        client = Client(client_authn_method=CLIENT_AUTHN_METHOD)
        issuer = "https://oidc.viasat.io"
        provider_info = client.provider_config(issuer)
        print(provider_info["authorization_endpoint"])
        print(client.provider_info["scopes_supported"])

        #Actual code
        session={}
        # session["state"] = rndstr()
        session["state"] = "1234"
        session["nonce"] = rndstr()
        print("state: ", session["state"])
        print("nonce: ", session["nonce"])

        args = {
            "client_id": "",
            "response_type": "code",
            "scope": ["openid"],
            "nonce": session["nonce"],
            "redirect_uri": "https://localhost:8080/login/generic_oauth",
            "state": session["state"]
        }

        auth_req = client.construct_AuthorizationRequest(request_args=args)
        login_url = auth_req.request(client.authorization_endpoint)

        print("login_url: ",login_url)
        #login_url redirects to SSO page of Viasat.io
        #https://oidc.name.io/oidc/authorize?client_id=1y3hNstQzChHWotDVn8E&response_type=code&scope=openid&nonce=mi2i39QPfVWXafqP&redirect_uri=https%3A%2F%2Funifiedgc.viasat-io.com%2Flogin%2Fgeneric_oauth&state=f0Tnvhk3BAWRDUrI

        #return to UI
        #Assuming getting response

        #response url after logging into SSO
        response = "https://ocalhost:8080/login/generic_oauth?state=1234&code=fbaeb8f31e9fbde91de069efdd94a5f911b1bd6b0dada31af51b09e17f9d1a0d"
       
        aresp = client.parse_response(AuthorizationResponse, info=response,sformat="urlencoded")

        print("response stat: ", aresp["state"])

        code = aresp["code"]
        print("Auth code: ", code)
        
        assert aresp["state"] == session["state"]

        args1 = {
            "code": aresp["code"]
        }

        resp = client.do_access_token_request(state=aresp["state"],
                                            request_args=args1,
                                            authn_method="client_secret_basic")


        # resp = client.do_access_token_request(state="1234",
        #                                     request_args= {"code": "fbaeb8f31e9fbde91de069efdd94a5f911b1bd6b0dada31af51b09e17f9d1a0d"},
        #                                     authn_method="client_secret_basic")

        userinfo = client.do_user_info_request(state=aresp["state"]) 
        print("User Info: ")    
        print(userinfo)                               

        return login_url