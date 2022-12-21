import React, { useState } from 'react';

import './Testimonials.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import slide05 from "../ourwork/images/image012.jpg"
import Videodesc from './Videodesc';
import { Container, Row } from 'react-bootstrap';
export default function testimonials() {
  const [visibleItem, setVisibleItem] = useState('video1');
  const [buttonText, setButtonText] = useState("See more ..");
  const [visibleItem2, setVisibleItem2] = useState('video2');
  const [visibleItem3, setVisibleItem3] = useState('video3');
  const settingParagraph = function () {
    if (visibleItem === "video1") {
      setVisibleItem('video1');
      setButtonText("See less ..");
    
      setVisibleItem2("");
      setVisibleItem3("");
    }
    else if(visibleItem2 === "video2") {
      setVisibleItem("");
      setButtonText("See less ..");
      setVisibleItem2("video2");
      setVisibleItem3("");
    }
    else if(visibleItem3 === "video3") {
      setVisibleItem("");
      setButtonText("See less ..");
      setVisibleItem2("");
      setVisibleItem3("video3");
    }

  }
  return (

    <div className="testimonials" >
      <div className='title'>Testimonials</div>


      <Container>
        <Row className="d-flex justify-content-between ">
        {visibleItem === "video1" &&
          <Card className="custom-class" style={{ width: '22rem' }}>

            <Card.Body>
              <Card.Title>Spiritual</Card.Title>
              <iframe
                src="https://www.youtube.com/embed/rdgrnsAuM6c"
                frameborder="0"
                allow="autoplay; encrypted-media;fullscreen"
                allowfullscreen
                title="video"
                width={300} height={168.75}
              />{" "}
              <Card.Text>
              Interview between Sister Ida (a native of Burundi) and M. Gabriel Legault of Canada July 2022
              </Card.Text>
              <Button variant="primary" style={{ textAlign: 'center' }} onClick={settingParagraph}>{buttonText}</Button>
            </Card.Body>
          </Card>
}
          {visibleItem2 === "video2" &&
          <Card className="custom-class" style={{ width: '22rem' }}>

            <Card.Body>
              <Card.Title>Former Orphans Share</Card.Title>
              <iframe
                src="https://www.youtube.com/embed/siVDjGG_fGQ"
                frameborder="0"
                allow="autoplay; encrypted-media;fullscreen"
                allowfullscreen
                title="video"
                width={300} height={168.75}
              />{" "}
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            
              <Button variant="primary" style={{ textAlign: 'center' }} onClick={settingParagraph}>{buttonText}</Button>
            </Card.Body>
          </Card>}

          {visibleItem3 === "video3" &&
          <Card className="custom-class" style={{ width: '22rem' }}>

            <Card.Body>
              <Card.Title>Former Orphans Share</Card.Title>
              <iframe
                src="https://www.youtube.com/embed/omP_ZxEtdEk"
                frameborder="0"
                allow="autoplay; encrypted-media;fullscreen"
                allowfullscreen
                title="video"
                width={300} height={168.75}
              />{" "}
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" style={{ textAlign: 'center' }} onClick={settingParagraph}>{buttonText}</Button>
            </Card.Body>
          </Card>}
        </Row>
      </Container>
<div>
  <Container>
    <Row>
    {visibleItem === "video1" &&
                <div className="pull-left">
                  <p align="left">
                    <strong>Interview between Sister Ida (a native of Burundi)</strong>
                  </p>
                  <p align="left">
                    <strong>and M. Gabriel Legault of Canada</strong>
                  </p>
                  <p align="left">
                    <strong>July 2022</strong>
                  </p>
                  <p>
                    Hello,
                  </p>
                  <p>
                    I am Sister Ida of the Congregation of the Ursuline Sisters of the Sacred
                    Heart of Jesus. I
                  </p>
                  <p>
                    will tell you my story, especially in reference of abandoned children (    <em>in her country of origin</em>).
                  </p>
                  <p>
                    My first experience on this matter (<em>of babies being left to die</em>)
                    was with a young girl who gave birth. When she got pregnant, the man who
                    got her pregnant didn't want to be with her. So, the girl sought to abandon
                    her child. She went to live with a very, very poor family and very early in
                    the morning she left the child on the bed and left and nobody ever saw her
                    agin.
                  </p>
                  <p>
                    Then, in this very poor family, there was a widow who had nothing. She took
                    the child who was crying and crying and could not find the mother because
                    she had already ran away. Then, the widow went to talk to the Administrator
                    and he wouldn’t accept the childI felt inside that. Then she went to the
                    local Chief (<em>Elder</em>) to find out where to put the child but nobody
                    would accept the child.
                  </p>
                  <p>
                    At that time, I was somewhat in charge of the Health Center. I had heard of
                    the story because the old woman was looking to abandon the child. It was a
                    boy. She wanted to let the child die. It was a male child. And I, I was
                    caught up in this story!
                  </p>
                  <p>
                    When I saw the child, I felt totally devastated. I told myself: "Instead of
                    abandoning the child who has been abandoned by his mother, I prefer to
                    abandon my religious life to save this child.”. So, I felt inside of me
                    that I had to die to myself in order to give life to this child. And then I
                    took the decision to take the child without even asking the permission of
                    my superiors.
                  </p>
                  <p>
                    I took the child, I washed him, I gave him everything, I took the milk -
                    because in the health center, we had everything. It was the feast day of
                    Saint Joseph. I gave him the name of Joseph, and the other name, I gave the
                    name of Donato. Donato, is an Italian name that means “a gift”. I took it
                    as if it was a gift!
                  </p>
                  <p>
                    When I brought the child into the community, all the sisters realized and
                    said that we could not abandon the child. It was a two-week-old child. In
                    our community of the Ursuline Sisters of the Sacred Heart of Jesus, we do
                    not have an orphanage. We had to look for an orphanage and the community
                    paid the orphanage for 3 years because that orphanage only kept babies for
                    3 years.
                  </p>
                  <p>
                    After three years, I didn't know where to put the child, because I lived
                    with my community. But by the grace of God, I found a family that did not
                    have a son and they agreed to adopt the child.
                  </p>
                  <p>
                    I made my will, I don't know, it was like a will to give up the child. I
                    gave up
                  </p>
                  <p>
                    the child because the child was under my name. The child needed a family
                    with a father and a mother.
                  </p>
                  <p>
                    Now, the child is 9 years old and he has found a family. I am therefore
                    happy!
                  </p>
                  <p>
                    It's not only that case, there are many abandoned children in the hills,
                    many girl mothers who are ashamed to show that they have given birth. There
                    are those who kill their children and there are those who abandon them on
                    the road and many die.
                  </p>
                  <p>
                    This child had the chance to survive! Now he lives and he is 9 years old. I
                    thank you.
                  </p>
                </div>
              }
    </Row>
  </Container>

</div>

    </div>
  )
}