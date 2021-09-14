import { Row, Col } from "reactstrap";
import ListItemItem from "./ListItemItem";

const ListItem = (props) => {
  const arrArtists = props.loadedArtists
    .sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return +1;
      }
    })
    .map((artist) => {
      return (
        <Col sm="6" md="4" xs="3" lg="3" lx="2">
          <ListItemItem key={Math.random} artist={artist} />
        </Col>
      );
    });
  const content =
    props.loadedArtists.length === 0 ? "No fucking Items" : arrArtists;
  return <Row style={{ marginBottom: "20px" }}>{content}</Row>;
};

export default ListItem;
