import newItems from "../data/itemnew.json";
import { Col, Row } from "react-bootstrap";
import { NewItem } from "../components/NewItem";

export function New() {
  return (
    <>
      {/* <h1>About</h1> */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {newItems.map((item) => (
          <Col key={item.id}>
            <NewItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
