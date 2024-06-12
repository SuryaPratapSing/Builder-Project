import React, { Component } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
  IconButton,
  Tooltip,
  Input,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarRateIcon from '@mui/icons-material/StarRate';

interface State {
  courseName: string;
  duration: string;
  points: number;
  category: string;
  level: string;
  productType: string;
  language: string;
  certificate: string;
  isActive: boolean;
  description: string;
}

class CourseInformation extends Component<{}, State> {
  state: State = {
    courseName: "",
    duration: "",
    points: 10,
    category: "Wine",
    level: "Intermediate",
    productType: "Free",
    language: "English",
    certificate: "WSET",
    isActive: true,
    description: "",
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isActive: e.target.checked });
  };

  render() {
    return (
      <Box
        p={3}
        mx="auto"
        sx={{
          width: "77vw",
          margin: "auto",
          border: "1px solid #e0e0e0",
          borderRadius: "20px",
          background: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Course Information
          </Typography>

          <Box sx={{display:'flex',alignItems:'center ', gap:'15px'}}>
          <Typography variant="subtitle1" gutterBottom sx={{display:'flex',alignItems:'center',gap:'5px'}}>
           <StarRateIcon sx={{fontSize:'18px'}}/> 10 pts
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            |
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{display:'flex',alignItems:'center',gap:'5px'}}>
           <AccessTimeIcon sx={{fontSize:'18px'}}/>  24h 30m
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            |
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={this.state.isActive}
                onChange={this.handleSwitchChange}
                color="primary"
              />
            }
            label="Active"
          />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={{ width: "50%" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Course Name"
              name="courseName"
              value={this.state.courseName}
              onChange={this.handleChange}
            />

            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                fullWidth
                margin="normal"
                label="Duration"
                name="duration"
                value={this.state.duration}
                onChange={this.handleChange}
                placeholder="24h 30m"
              />

              <Box display="flex" alignItems="center" mb={2}>
                <TextField
                  fullWidth
                  label="Leaderboard Points"
                  margin="normal"
                  name="points"
                  value={this.state.points}
                  onChange={this.handleChange}
                  type="number"
                />
                <Tooltip title="10 is default">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                select
                fullWidth
                margin="normal"
                label="Category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <MenuItem value="Wine">Wine</MenuItem>
                <MenuItem value="Beer">Beer</MenuItem>
                <MenuItem value="Spirits">Spirits</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                margin="normal"
                label="Level"
                name="level"
                value={this.state.level}
                onChange={this.handleChange}
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                select
                fullWidth
                margin="normal"
                label="Product Type"
                name="productType"
                value={this.state.productType}
                onChange={this.handleChange}
              >
                <MenuItem value="Free">Free</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
              </TextField>

              <TextField
                fullWidth
                margin="normal"
                label="Language"
                name="language"
                value={this.state.language}
                onChange={this.handleChange}
              />
            </Box>

            <TextField
              fullWidth
              margin="normal"
              label="Certificate"
              name="certificate"
              value={this.state.certificate}
              onChange={this.handleChange}
            />
          </Box>
          <Box
            sx={{
              width: "1px",
              height: "48.5vh",
              background: "#e0e0e0",
              marginTop: "1rem",
            }}
          ></Box>
          <Box sx={{ width: "50%" }}>
            <Box
              sx={{
                marginTop: "20px",
                height: "6rem",
                border: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input type="file" sx={{border:'none',outline:'none',marginLeft:'15px'}}/>
            </Box>

            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              multiline
              rows={4}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CourseInformation;
