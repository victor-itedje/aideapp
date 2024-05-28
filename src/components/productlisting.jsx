import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ProductCard() {
  return (
    <div id="cards">
      <div className="categories">
        <div className="headerscat">
          <h2 className="headers" id="catheader">
            Personal services
          </h2>
          <h4 className="body-par">see more &#128073; </h4>
        </div>
        <div className="cardrows">
          <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src="./catering.jpg" loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Catering
              </Link>

              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                2,900 THB
              </Typography>
              <Typography level="body-sm">
                (Only <b>7</b> Vendors!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button id="cardbtn" variant="solid" size="sl">
                View providers
              </Button>
              {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
            </CardOverflow>
          </Card>
          <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src="./laundry.jpg" loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Laundry
              </Link>

              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                2,900 THB
              </Typography>
              <Typography level="body-sm">
                (Only <b>7</b> left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button id="cardbtn" variant="solid" size="sl">
                View providers
              </Button>
              {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
            </CardOverflow>
          </Card>
          <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src="./cleaningcard.jpg" loading="lazy" alt="cleaning" />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Cleaning
              </Link>

              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                2,900 THB
              </Typography>
              <Typography level="body-sm">
                (Only <b>7</b> left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button id="cardbtn" variant="solid" size="sl">
                View providers
              </Button>
              {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
            </CardOverflow>
          </Card>
        </div>
      </div>

      <div className="cardrows">
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="./massage.jpg"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Massage
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="./handy.jpg"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Handy man
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="./beauty.jpg"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Beauty technician
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
      </div>
      <div className="cardrows">
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Super Rockez A400
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Super Rockez A400
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Super Rockez A400
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
            {/* <Button id="cardbtn" variant="solid">
          Book Service
        </Button> */}
          </CardOverflow>
        </Card>
      </div>
    </div>
  );
}
