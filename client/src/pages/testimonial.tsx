import { FC, useState } from "react";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwiperButtonNext: FC<any> = ({ isEnd, isStart }) => {
  const swiper = useSwiper();
  return (
    <>
      <Button disabled={isStart} onClick={() => swiper.slidePrev()}>Prev</Button>
      <Button disabled={isEnd} onClick={() => swiper.slideNext()}>Next</Button>
    </>
  );
};

import "swiper/swiper-bundle.css";

export const Testimonial: FC = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsEnd(swiper.isEnd);
    setIsStart(swiper.isBeginning)
  };

  return (
    <Box  sx={{ backgroundImage: "url('../../src/assets/Rectangle 1378.png')" }}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <img src="../../src/assets/Rectangle 1361 (1).png"/>
        <h4>TESTIMONIAL</h4>
      </Container>
      <h1> Build Everything You Needs </h1>
      <Box>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView="auto"
          spaceBetween={50}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <SwiperButtonNext isEnd={isEnd} isStart={isStart}/>
          <SwiperSlide  >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Container>
                <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
                  <img
                    src="../../src/assets/Rectangle 48.jpg"
                    alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      {
                        `Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
              <Container>
                <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
                  <img
                    src="../../src/assets/Rectangle 48.jpg"
                    alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      {
                        `Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Container>
                <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
                  <img
                    src="../../src/assets/Rectangle 48.jpg"
                    alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      {
                        `Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
              <Container>
                <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
                  <img
                    src="../../src/assets/Rectangle 48.jpg"
                    alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {"Lorem Ipsum"}
                    </Typography>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      {
                        `Lorem Ipsum is simply dummy text of the printing and 
                      typesetting  industry. Lorem Ipsum has been.`
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </Box>
          </SwiperSlide>

        </Swiper>
      </Box>
    </Box>
  );
};
