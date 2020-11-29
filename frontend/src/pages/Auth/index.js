import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PasswordIcon from "@material-ui/icons/LockOpen";
import InputAdornment from "@material-ui/core/InputAdornment";
import axiosFetch from "core/axiosFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: 30,
    // },
    // image: {
    backgroundImage: "url(https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg)",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const INITIAL_STATE = { text: "", error: "" };
export default function SignInSide() {
  const classes = useStyles();

  const [mode, setMode] = React.useState("login");
  const [email, setEmail] = React.useState(INITIAL_STATE);
  const [password, setPassword] = React.useState(INITIAL_STATE);
  const [userType, setUserType] = React.useState("");

  const ModeText = () => {
    switch (mode) {
      case "login":
        return "Sign In";
      case "signup":
        return "Sign Up";

      case "reset":
        return "Reset Password";
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // axiosFetch.post("/register").then
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" color="textSecondary">
            <b>
              <ModeText />
            </b>
          </Typography>
          <form className={classes.form} onSubmit={(e) => {}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => setEmail({ error: "", text: e.target.value })}
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            {mode === "login" ? (
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  onChange={(e) =>
                    setPassword({ error: "", text: e.target.value })
                  }
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            ) : (
              <>
                {mode !== "reset" && (
                  <FormControl component="fieldset">
                    <FormLabel component="legend">You are?</FormLabel>
                    <RadioGroup
                      aria-label=""
                      name="userType"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <FormControlLabel
                        value="doctor"
                        label="Doctor"
                        control={<Radio />}
                      />
                      <FormControlLabel
                        value="patient"
                        label="Patient"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <FormHelperText></FormHelperText>
                  </FormControl>
                )}
              </>
            )}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <ModeText />
            </Button>
            <Grid container>
              <Grid item xs>
                <Grow in={mode === "login"}>
                  <Link
                    style={{ cursor: "pointer" }}
                    onClick={() => setMode("reset")}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grow>
              </Grid>
              <Grid item>
                <Link
                  style={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                >
                  {mode === "login"
                    ? "Don't have an account? Sign Up"
                    : "Have account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
