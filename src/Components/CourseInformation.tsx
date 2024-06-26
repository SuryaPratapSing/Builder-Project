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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRateIcon from "@mui/icons-material/StarRate";
import ImageIcon from "@mui/icons-material/Image";

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
  imageSrc: string | null;
  formDataArray: any[];
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
    imageSrc: null,
    formDataArray: [],
  };

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ imageSrc: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    this.setState(
      (prevState) => {
        const updatedState = { ...prevState, [name]: value };
        const formDataArray = [...prevState.formDataArray, updatedState];
        return { ...updatedState, formDataArray };
      },
      () => {
        console.log(this.state.formDataArray);
      }
    );
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
          <Typography
            gutterBottom
            sx={{
              fontSize: {
                sx: "8px",
                lg: "22px",
              },
            }}
          >
            Course Information
          </Typography>

          <Box sx={{ display:
            {
              xs:'none',
              lg:'flex'
            }, alignItems: "center ", gap: "15px" }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <StarRateIcon sx={{ fontSize: "18px" }} /> 10 pts
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              |
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <AccessTimeIcon sx={{ fontSize: "18px" }} /> 24h 30m
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

        <Box
          sx={{
            display: {
              lg: "flex",
            },
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "50%",
              },
            }}
          >
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
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          ></Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "50%",
              },
            }}
          >
            <Box
              sx={{
                marginTop: "20px",
                height: "6rem",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              {this.state.imageSrc ? (
                <img
                  style={{
                    height: "100px",
                    width: "150px",
                    objectFit: "cover",
                    border: "1px dotted #e0e0e0",
                    borderRadius: "20px",
                  }}
                  src={this.state.imageSrc}
                  alt=""
                />
              ) : (
                <ImageIcon
                  style={{
                    height: "100px",
                    width: "150px",
                    border: "1px dashed #e0e0e0",
                    borderRadius: "20px",
                    color: "#e0e0e0",
                  }}
                />
              )}
              <Box>
                <Typography variant="h6">Overview Picture</Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  Minimal resolution: 343x193px
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  Maximum size: 5mb
                </Typography>
                <Input type="file" onChange={this.handleImageChange} />
              </Box>
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
