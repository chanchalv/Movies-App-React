import React from "react";
import { Button, CardContent, Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
    minWidth: 240,
    maxWidth: 240,
    padding: 15,
    margin: theme.spacing(1),

  },
  title: {
    textAlign: 'left',
  }
}));
const names = [
  'Action',
  'Sci-Fi',
  'Drama',
];
const namesOfArtists = [
  'Marlon Brando',
  'Al Pacino',
  'Christian Bale',
  'Heath Ledger',
  'Leonardo DiCaprio',
  'Joseph Gordon-Levitt',
  'Matthew McConaughey',
  'Anne Hathaway',
  'Rajkummar Rao',
  'KayKay Menon',

]

export default function MovieFilterCard() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  const [artistName, setArtistName] = React.useState([]);


  const handleChange = (event) => {
    setPersonName(event.target.value);


  };
  const handleChange2 = (e) => {
    setArtistName(e.target.value);
  };
  return (
    <form noValidate autoComplete="off">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="theme.palette.primary.light" gutterBottom>
            FIND MOVIES BY:
          </Typography>
        </CardContent>
        <FormControl>
          <FormControl><TextField label="Movie Name" /></FormControl>



          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}

            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Artists</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={artistName}
              onChange={handleChange2}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}

            >
              {namesOfArtists.map((artistname) => (
                <MenuItem key={artistname} value={artistname}>
                  <Checkbox checked={artistName.indexOf(artistname) > -1} />
                  <ListItemText primary={artistname} />
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="date"
              label="Release Date Start"
              type="date"
              defaultValue="dd-mm-yyyy"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="date"
              label="Release Date End"
              type="date"
              defaultValue="dd-mm-yyyy"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <Button variant="contained" color="primary">APPLY</Button>
          </FormControl>
        </FormControl>
      </Card>
    </form >

  );
}