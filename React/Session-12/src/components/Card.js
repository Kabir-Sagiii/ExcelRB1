import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";

function CardComp() {
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Card variant="outlined">
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aut tempora! Id autem ipsa deserunt, labore ex sapiente. Ipsam
            numquam hic natus nesciunt sunt eligendi doloribus excepturi, amet
            porro accusantium beatae ex nisi, asperiores voluptate quae?
            Deserunt obcaecati libero minima ratione asperiores praesentium.
            Ratione, deserunt. Nisi saepe facilis repellendus animi!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardMedia
          sx={{ height: 200 }}
          title="User /image"
          image="https://th.bing.com/th?id=ORMS.d289c3684f869d17d34e29f4220baca0&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
        />
        <CardContent>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolores placeat totam blanditiis ipsa fugit nobis perspiciatis modi
            temporibus recusandae suscipit ratione, incidunt doloribus
            consequuntur, asperiores quod earum amet? Rerum!
          </p>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Profile Details</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardComp;
