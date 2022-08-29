import { Col } from "react-bootstrap";

export const MenuCard = ({title, description, imgUrl,Config_url_list}) => {
    return(
    <Col size={12} sm={6} md={4}>
    {/* // <Col>  */}
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
            <h1>
             <ul>
              {Config_url_list}
             </ul>
             </h1>
        </div>
      </div>
    </Col>
    )
}