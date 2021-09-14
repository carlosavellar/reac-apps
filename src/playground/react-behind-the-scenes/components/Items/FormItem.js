import { useReducer, useState, useEffect } from "react";
import { FormGroup, Form, Input, Button, Label, Row, Col } from "reactstrap";
import TooltipItem from "./../../hooks/ToolTip";
import { Switch, FormControlLabel } from "@material-ui/core";
import { InputCounter } from "./../../utils/index";
// import classes from "./FormGroup.module.css";

const INITIAL_VALUE = {
  name: "",
  album: "",
  description: "",
  released: null,
  genre: [],
  country: "",
  active: false,
};

const enteredItemsReducer = (state, action) => {
  switch (action.type) {
    case "ENTERED_NAME":
      return { ...state, name: action.name };
    case "ENTERED_ALBUM":
      return { ...state, album: action.album };
    case "ENTERED_DESCRIPTION":
      return { ...state, description: action.description };
    case "ENTERED_RELEASED":
      return { ...state, released: action.released };
    case "ENTERED_GENRE":
      return { ...state, genre: action.genre };
    case "ENTERED_ACTIVE":
      return { ...state, active: !state.active };
    default:
      return state;
  }
};

const FormItem = (props) => {
  const [counter, setCounter] = useState(0);
  const [genreList, setGenreList] = useState([]);

  const [enteredItems, dispatch] = useReducer(
    enteredItemsReducer,
    INITIAL_VALUE
  );

  useEffect(() => {
    console.log(enteredItems);
  }, [enteredItems]);

  const enteredNameHandler = (e) => {
    dispatch({ type: "ENTERED_NAME", name: e.target.value });
  };

  const enteredAlbumHandler = (e) => {
    dispatch({ type: "ENTERED_ALBUM", album: e.target.value });
  };

  const enteredDescriptionHandler = (e) => {
    dispatch({ type: "ENTERED_DESCRIPTION", description: e.target.value });
    setCounter(e.target.value.length);
  };

  const enteredReleaseDateHandler = (e) => {
    dispatch({ type: "ENTERED_RELEASED", released: e.target.value });
  };

  const enteredGenreHandler = (e) => {
    const allGenres = [];

    let arrGenres = e.target.value.split(",");
    if (e.charCode === 44) {
      for (let g in arrGenres) {
        allGenres.push(arrGenres[g]);
      }
      e.target.value = "";
    }
    dispatch({ type: "ENTERED_GENRE", genre: arrGenres });
  };

  const genreKeyHandler = (e) => {
    const allGenres = [];
    let arrGenres = e.target.value.split(",");
    if (e.charCode === 44) {
      e.target.value = "";
      for (let g in arrGenres) {
        allGenres.push(arrGenres[g]);
      }
      setGenreList(allGenres);
    }
  };

  const clearInput = (e) => {
    if (e.charCode === 44) {
      e.target.value = " ";
    }
  };

  const genreKeyUpHandler = (e) => {
    if (e.charCode === 44) {
      e.target.value = "";
    }
  };

  const toggleCheckedHandler = (e) => {
    console.log(e.target.value);
    dispatch({ type: "ENTERED_ACTIVE" });
  };

  const submitArtistHandler = (e) => {
    debugger;
    e.preventDefault();
    props.onAddArtist({ artist: enteredItems });
  };

  return (
    <Form onSubmit={submitArtistHandler}>
      <TooltipItem innerText="José Carlos" tooltipText="Developer" />
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              value={enteredItems.name}
              onChange={enteredNameHandler}
              bsSize="sm"
            />
          </FormGroup>
          <FormGroup>
            <Label>Album</Label>
            <Input
              type="text"
              value={enteredItems.album}
              onChange={enteredAlbumHandler}
              bsSize="sm"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Description</Label>
            <Input
              bsSize="sm"
              type="textarea"
              name="selectMulti"
              id="exampleSelectMulti"
              maxLength="50"
              multiple
              value={enteredItems.description}
              onChange={enteredDescriptionHandler}
            />
            <span>
              <InputCounter>{counter}</InputCounter>
            </span>
          </FormGroup>
          <Row>
            <Col sm={4}>
              {" "}
              <FormGroup>
                <Label>Genres</Label>
                <Input
                  type="text"
                  value={enteredItems.genre}
                  onChange={enteredGenreHandler}
                  onKeyPress={(e) => {
                    genreKeyHandler(e);
                    clearInput(e);
                  }}
                  onKeyUp={genreKeyUpHandler}
                  bsSize="sm"
                />
              </FormGroup>
            </Col>
            <Col>
              {genreList.map((word) => (
                <span
                  key={Math.random() * 3}
                  style={{ padding: "3px", borderRadius: "5px" }}
                >
                  {word}
                </span>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>Released in</Label>
            <Input
              bsSize="sm"
              type="date"
              rows="10"
              name="datetime"
              id="exampleSelectMulti"
              placeholder="Year"
              value={enteredItems.release}
              onChange={enteredReleaseDateHandler}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  // size="normal"
                  checked={enteredItems.active}
                  onKeyDown={toggleCheckedHandler}
                  onKeyPress={toggleCheckedHandler}
                />
              }
              label="Active"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Button type="submit">send</Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default FormItem;
