import React, { useReducer, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
// import Button from "./components/UI/Button/Button";
import { DUMMY_ITEMS } from "./store/dummy_items";
import FormItem from "./components/Items/FormItem";
import ListItem from "./components/Items/ListItem";
import Header from "./components/UI/Header/Header";

import "./App.css";

const INITIAL_VALUE = {
  artists: [],
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      debugger;
      return state.artists.concat(action.artist);
    default:
      return state;
  }
};

function App() {
  const [artistState, dispatchItem] = useReducer(itemReducer, INITIAL_VALUE);

  useEffect(() => {
    console.log(artistState, "🎹");
    dispatchItem(artistState);
  }, [artistState]);

  const addItemHandler = (artist) => {
    debugger;
    dispatchItem({ type: "ADD", artist: artist });
  };

  // console.log(artistState.artists, "APP.JS");

  return (
    <Fragment>
      <Container>
        <Header />
      </Container>

      <div className="app">
        <Container>
          <h1>Hi there!</h1>
          <FormItem onAddArtist={addItemHandler} />
          <Row className="space">
            <Col>
              {/* <Button
              onClick={() => {
                sortItems(DUMMY_ITEMS);
              }}
            >
              Sort
            </Button> */}
            </Col>
            {/* <Col>
              <Button>Enable tog2le</Button>
            </Col> */}
          </Row>
          <ListItem loadedArtists={artistState.artists} />
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
