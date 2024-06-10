import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Skeleton from "@mui/material/Skeleton";
import NavigationBar from "./navbar";

export default function ProductCard() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderCard = (imgSrc, title, pText, price, stock, serviceId) => (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          ) : (
            <img src={imgSrc} loading="lazy" alt={pText} />
          )}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        {loading ? (
          <Skeleton variant="text" width="40%" />
        ) : (
          <Typography level="body-xs">{title}</Typography>
        )}
        {loading ? (
          <Skeleton variant="text" width="60%" />
        ) : (
          <p
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
          >
            {pText}
          </p>
        )}
        {loading ? (
          <Skeleton variant="text" width="30%" />
        ) : (
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            {price}
          </Typography>
        )}
        {loading ? (
          <Skeleton variant="text" width="50%" />
        ) : (
          <Typography level="body-sm">
            (Only <b>{stock}</b> left in stock!)
          </Typography>
        )}
      </CardContent>
      <CardOverflow>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={40} />
        ) : (
          <Link to={`/vendors/${serviceId}`} style={{ textDecoration: "none" }}>
            <Button id="cardbtn" variant="solid" size="sl">
              View providers
            </Button>
          </Link>
        )}
      </CardOverflow>
    </Card>
  );

  return (
    <>
    <NavigationBar />
    <div id="cards">
      <div className="categories">
        <div className="headerscat">
          <h2 className="headers" id="catheader">
            Personal services
          </h2>
        </div>
        <div className="cardrows">
          {renderCard(
            "./catering.jpg",
            "Bluetooth Headset",
            "Catering",
            "2,900 THB",
            7,
            "catering"
          )}
          {renderCard(
            "./laundry.jpg",
            "Bluetooth Headset",
            "Laundry",
            "2,900 THB",
            7,
            "laundry"
          )}
          {renderCard(
            "./cleaningcard.jpg",
            "Bluetooth Headset",
            "Cleaning",
            "2,900 THB",
            7,
            "cleaning"
          )}
        </div>
      </div>
      <div className="cardrows">
        {renderCard(
          "./massage.jpg",
          "Bluetooth Headset",
          "Massage",
          "2,900 THB",
          7,
          "massage"
        )}
        {renderCard(
          "./handy.jpg",
          "Bluetooth Headset",
          "Handy man",
          "2,900 THB",
          7,
          "handyman"
        )}
        {renderCard(
          "./beauty.jpg",
          "Bluetooth Headset",
          "Beauty technician",
          "2,900 THB",
          7,
          "beauty"
        )}
      </div>
    </div>
    </>
  );
}
