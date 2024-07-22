import React, { Component } from "react";
import { Button, Card, CardSubtitle } from "react-bootstrap";
import "./persones.css";
class Persones extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Amina",
      bio: "Systeme & Multimedia programmer",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
      profession: "Engineer",
      counter: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Card className="carte">
          <Card.Img className="img" variant="top" src={this.state.imgSrc} />
          <Card.Body>
            <Card.Title className="title">{this.state.fullName}</Card.Title>
            <CardSubtitle className="subt">
              {this.state.profession}
            </CardSubtitle>
            <Card.Text className="txt">{this.state.bio}</Card.Text>
            <Button variant="primary">Check</Button>
          </Card.Body>
        </Card>
        <p className="p-counter">
          Person mounted {this.state.counter} seconds ago
        </p>
      </div>
    );
  }
}
export default Persones;
