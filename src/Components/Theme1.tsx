import React, { Component } from "react";
import {
  Box,
  IconButton,
  Input,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Lesson from "./Lesson";

interface Props {
  title: string;
  lessons: number[];
}

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
  isVisible: boolean;
  nestedThemes: JSX.Element[];
  lessons: JSX.Element[];
  inputValues: any[];
}

class Theme1 extends Component<Props, State> {
  private initialState: State = {
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
    isVisible: true,
    nestedThemes: [],
    lessons: [],
    inputValues: [],
  };

  state: State = { ...this.initialState };

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

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>, () => {
      
      this.updateInputValuesArray(name, value);
    });
  };

  handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isActive: e.target.checked });
  };

  handleDelete = () => {
    this.setState({ isVisible: false });
  };

  addNewTheme = () => {
    this.setState((prevState) => ({
      nestedThemes: [
        ...prevState.nestedThemes,
        <Theme1
          key={prevState.nestedThemes.length}
          title={`Theme ${prevState.nestedThemes.length + 1}`}
          lessons={[]}
        />,
      ],
    }));
  };

  addNewLesson = () => {
    this.setState((prevState) => ({
      lessons: [
        ...prevState.lessons,
        <Lesson key={prevState.lessons.length} title={`Lesson ${prevState.lessons.length + 1}`} />
      ],
    }));
  };

  updateInputValuesArray = (name: string, value: string) => {
    this.setState((prevState) => {
      const updatedValues = [...prevState.inputValues];
      const index = updatedValues.findIndex((item) => item.name === name);
      if (index !== -1) {
        updatedValues[index].value = value;
      } else {
        updatedValues.push({ name, value });
      }
      console.log("Input Values Array:", updatedValues);
      return { inputValues: updatedValues };
    });
  };

  render() {
    const { title } = this.props;
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <>
        <Box
          p={3}
          mx="auto"
          sx={{
            width: "77vw",
            margin: "auto",
            border: "1px solid #e0e0e0",
            borderRadius: "20px",
            background: "white",
            marginTop: '3vh'
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
              {title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <StarRateIcon sx={{ fontSize: '18px' }} /> 5 pts
              </Typography>

              <button
                style={{
                  border: '1px solid #e0e0e0',
                  background: 'transparent',
                  color: 'red',
                  padding: '5px 10px',
                  borderRadius: "20px",
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={this.handleDelete}
              >
                <DeleteIcon sx={{ fontSize: '18px' }} /> Delete Theme
              </button>

            </Box>
          </Box>

          <Box sx={{ display: 
            {
              lg:'flex'
            }, gap: "20px" }}>
            <Box sx={{ width:{
              xs:'100%',
              lg:'50%'
            } }}>
              <TextField
                fullWidth
                margin="normal"
                label="Title"
                name="courseName"
                value={this.state.courseName}
                onChange={this.handleChange}
              />

              <Box sx={{ display: "flex", gap: "20px" }}>
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
                    <IconButton></IconButton>
                  </Tooltip>
                </Box>

                <TextField
                  fullWidth
                  margin="normal"
                  label="Order in the course"
                  name="duration"
                  value={this.state.duration}
                  onChange={this.handleChange}
                  placeholder="Order in the course"
                />
              </Box>
              <TextField
                select
                fullWidth
                margin="normal"
                label="Product type"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <MenuItem value="Wine">Free</MenuItem>
                <MenuItem value="Beer">Paid</MenuItem>
              </TextField>
            </Box>
            <Box
              sx={{
                width: "1px",
                height: "29vh",
                background: "#e0e0e0",
                marginTop: "1rem",
                display:{
                  xs:'none',
                  lg:'block'
                }
              }}
            ></Box>
            <Box sx={{ width:{
              xs:'100%',
              lg:'50%'
            } }}>
              <Box
                sx={{
                  marginTop: "20px",
                  height: "6rem",
                  display: "flex",
                  alignItems: "center",
                  gap: '15px'
                }}
              >
                {this.state.imageSrc ? (
                  <img style={{ height: '100px', width: '150px', objectFit: 'cover', border: "1px dotted #e0e0e0", borderRadius: '20px' }} src={this.state.imageSrc} alt="" />
                ) : (
                  <ImageIcon style={{ height: '100px', width: '150px', border: "1px dashed #e0e0e0", borderRadius: '20px', color: '#e0e0e0' }} />
                )}
                <Box>
                  <Typography variant="h6">Overview Picture</Typography>
                  <Typography sx={{ fontSize: '10px' }}>Minimal resolution: 343x193px</Typography>
                  <Typography sx={{ fontSize: '10px' }}>Maximum size: 5mb</Typography>
                  <Input
                    type="file"
                    onChange={this.handleImageChange}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', marginTop: '1rem' }}>
            <button
              style={{
                border: '1px solid #e0e0e0',
                background: 'transparent',
                color: 'black',
                padding: '5px 10px',
                borderRadius: "20px",
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={this.addNewLesson}
            >
              <AddCircleOutlineIcon sx={{ fontSize: '18px' }} /> New Lesson
            </button>
          </Box>

          <Box sx={{ marginTop: '2rem' }}>
            {this.state.nestedThemes}
          </Box>
          
        </Box>
        <Box sx={{ marginTop: '2rem' }}>
            {this.state.lessons}
          </Box>
      </>
    );
  }
}

export default Theme1;
