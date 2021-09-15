import { TableBodyProps } from "../../interface/Props";
//   --- COMPONENTS ---
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button } from "../Button/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

//   --- STYLES ---
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const TableBody = ({
  id,
  address,
  label,
  refresh,
  handleDetails,
  description,
  floorsNumber,
}: TableBodyProps) => {
  const handleDelete = () => {
    fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    refresh();
  };

  return (
    <StyledTableRow>
      <StyledTableCell align="center">{address}</StyledTableCell>
      <StyledTableCell align="center">{label}</StyledTableCell>
      <StyledTableCell align="center">
        <Button
          onClick={() =>
            handleDetails(
              address,
              label,
              refresh,
              handleDetails,
              floorsNumber,
              description
            )
          }
        >
          Details
        </Button>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button onClick={handleDelete}>Delete room</Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TableBody;
