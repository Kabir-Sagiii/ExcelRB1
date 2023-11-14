import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function AccordionComp() {
  return (
    <div style={{ width: "500px", margin: "100px auto" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          HTML
        </AccordionSummary>
        <AccordionDetails>
          <h2>HTML Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            similique, inventore obcaecati, molestiae exercitationem sit
            accusamus dignissimos corrupti sapiente cupiditate mollitia deserunt
            amet vero quis? Quidem officiis possimus ratione? Autem earum,
            voluptatum sunt quis illo odit pariatur. Laudantium illum sequi
            ducimus qui sed sunt, praesentium placeat delectus nobis ipsa
            repellat minima in voluptatem fugit deserunt, ex voluptatibus
            dolores consequuntur est doloribus, ab tenetur! Excepturi, dolor.
            Culpa, explicabo dolorum fugit incidunt nam ratione quasi rerum
            reprehenderit molestiae ea minus cumque, quos voluptas corporis
            odio. Eos, vero! Aspernatur id explicabo soluta! Reiciendis commodi
            animi quae soluta fugit exercitationem excepturi labore saepe iusto?
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>CSS</AccordionSummary>
        <AccordionDetails>
          <h2>CSS Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            similique, inventore obcaecati, molestiae exercitationem sit
            accusamus dignissimos corrupti sapiente cupiditate mollitia deserunt
            amet vero quis? Quidem officiis possimus ratione? Autem earum,
            voluptatum sunt quis illo odit pariatur. Laudantium illum sequi
            ducimus qui sed sunt, praesentium placeat delectus nobis ipsa
            repellat minima in voluptatem fugit deserunt, ex voluptatibus
            dolores consequuntur est doloribus, ab tenetur! Excepturi, dolor.
            Culpa, explicabo dolorum fugit incidunt nam ratione quasi rerum
            reprehenderit molestiae ea minus cumque, quos voluptas corporis
            odio. Eos, vero! Aspernatur id explicabo soluta! Reiciendis commodi
            animi quae soluta fugit exercitationem excepturi labore saepe iusto?
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComp;
