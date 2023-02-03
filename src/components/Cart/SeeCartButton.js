import { Button } from "react-bootstrap";
import './SeeCartButton.css'

const SeeCartButton = (props) => {
    return(
        <Button variant="success" className="button" onClick={props.onShow}>See the Cart</Button>
    )
}

export default SeeCartButton;