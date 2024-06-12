import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface State {
  openTheme: number | null;
  openLessons: number[];
  themes: { title: string, lessons: number[] }[];
  mockExams: { title: string, lessons: number[] }[];
}

class SideNav extends Component<{}, State> {
  state: State = {
    openTheme: null,
    openLessons: [],
    themes: [
      { title: "Theme 1", lessons: [1, 2, 3, 4] },
      { title: "Theme 2", lessons: [1, 2, 3, 4] },
      { title: "Theme 3", lessons: [1, 2, 3, 4] }
    ],
    mockExams: [
      { title: "Mock Exam 1", lessons: [1, 2, 3, 4] }
    ]
  };

  toggleTheme = (themeIndex: number) => {
    this.setState((prevState) => ({
      openTheme: prevState.openTheme === themeIndex ? null : themeIndex,
    }));
  };

  toggleLesson = (lesson: number) => {
    this.setState((prevState) => ({
      openLessons: prevState.openLessons.includes(lesson)
        ? prevState.openLessons.filter((l) => l !== lesson)
        : [...prevState.openLessons, lesson],
    }));
  };

  addNewTheme = () => {
    this.setState((prevState) => ({
      themes: [...prevState.themes, { title: `Theme ${prevState.themes.length + 1}`, lessons: [] }]
    }));
  };

  addNewMockExam = () => {
    this.setState((prevState) => ({
      mockExams: [...prevState.mockExams, { title: `Mock Exam ${prevState.mockExams.length + 1}`, lessons: [] }]
    }));
  };

  renderTheme(themeIndex: number, themeTitle: string, lessons: number[]) {
    const { openTheme, openLessons } = this.state;
    const isThemeOpen = openTheme === themeIndex;

    return (
      <div key={themeIndex}>
        <Box
          sx={{
            marginLeft: "20px",
            marginTop: "5px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={() => this.toggleTheme(themeIndex)}
        >
          <ArrowDropDownIcon
            sx={{
              transform: isThemeOpen ? "rotate(-90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "600", fontSize: "16px" }}
            >
              {themeTitle}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
              Planting a grape
            </Typography>
          </Box>
        </Box>

        {isThemeOpen &&
          lessons.map((lesson) => (
            <Box
              key={lesson}
              sx={{
                marginLeft: "45px",
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
              }}
              onClick={() => this.toggleLesson(lesson)}
            >
              <PanoramaFishEyeIcon sx={{ fontSize: "12px" }} />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                >
                  Lesson {lesson}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                  {openLessons.includes(lesson)
                    ? "Hide content"
                    : "Show content"}
                </Typography>
              </Box>
            </Box>
          ))}
      </div>
    );
  }

  render() {
    const { themes, mockExams } = this.state;

    return (
      <Box
        sx={{ borderRight: "1px solid #e0e0e0", width: "15vw", paddingLeft: "15px", height: "87vh",background:'white',zIndex:'9999999' }}
      >
        <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "16px" }}>
          Course
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
          How the wine is done?
        </Typography>

        {themes.map((theme, index) => this.renderTheme(index + 1, theme.title, theme.lessons))}
        {mockExams.map((mockExam, index) => this.renderTheme(themes.length + index + 1, mockExam.title, mockExam.lessons))}

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
            onClick={this.addNewTheme}
          >
            <AddCircleOutlineIcon sx={{ fontSize: '18px' }} /> New Theme
          </button>

          
        </Box>
      </Box>
    );
  }
}

export default SideNav;