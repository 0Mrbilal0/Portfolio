import StarIcon from "@mui/icons-material/Star";

function Etoiles(competence) {
  switch (competence.niveau) {
    case 1:
      return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
        </div>
      );
    case 2:
      return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
        </div>
      );
    case 3:
      return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          {" "}
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "black" }} />
          <StarIcon sx={{ color: "black" }} />
        </div>
      );
    case 4:
      return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "black" }} />
        </div>
      );
    case 5:
      return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
          <StarIcon sx={{ color: "gold" }} />
        </div>
      );
    default:
      return (
        <>
          <p>None</p>
        </>
      );
  }
}

export default Etoiles;