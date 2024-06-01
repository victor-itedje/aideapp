import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function VendorList() {
  const vendors = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Professional Catering Services",
    },
    {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert Laundry and Dry Cleaning",
    },
    {
      name: "Mike Johnson",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      description: "Top-notch Cleaning Services",
    },
    {
      name: "Emily Davis",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      description: "Relaxing Massage Therapy",
    },
    {
      name: "Tom Wilson",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      description: "Handy Man Services",
    },
    {
      name: "Sarah Brown",
      avatar: "https://randomuser.me/api/portraits/women/95.jpg",
      description: "Beauty and Hair Technician",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Vendor List
      </Typography>
      <List>
        {vendors.map((vendor, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={vendor.name} src={vendor.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={vendor.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {vendor.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < vendors.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
