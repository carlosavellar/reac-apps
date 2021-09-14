import {
  Card,
  CardText,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import imgCard from "./../../assets/318x180.svg";

const ListItemItem = ({ artist }) => {
  return (
    <Card>
      <CardImg top width="100%" src={imgCard} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{artist.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Greatest album: <span style={{ color: "#000" }}>{artist.album}</span>
        </CardSubtitle>
        <CardText>{artist.description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default ListItemItem;
