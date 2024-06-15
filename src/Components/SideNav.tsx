import { Component } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';

interface Theme {
  title: string;
  lessons: number[];
}

interface Props {
  themes: Theme[];
  addNewTheme: () => void;
}

interface State {
  openTheme: number | null;
  openLessons: number[];
  isNavOpen: boolean;
}

class SideNav extends Component<Props, State> {
  state: State = {
    openTheme: null,
    openLessons: [],
    isNavOpen: true,
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

  toggleNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
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
    const { themes, addNewTheme } = this.props;
    const { isNavOpen } = this.state;

    return (
      <>
        <MenuOpenTwoToneIcon
          sx={{
            position: 'fixed',
            left:{
              xs: isNavOpen ? '49vw' : '0.5rem',
              lg: isNavOpen ? '14vw' : '0.5rem',
            },
            top: {
              xs:'0',
              lg:'12.1vh',
            },
            fontSize: '35px',
            background: 'white',
            borderBottomRightRadius: isNavOpen ? '5px' : '0',
            borderBottomLeftRadius: isNavOpen ? '0' : '5px',
            cursor: 'pointer',
            transition: 'left 0.3s ease',
            zIndex: '10000000',
          }}
          onClick={this.toggleNav}
        />
        <Box
          sx={{
            borderRight: "1px solid #e0e0e0",
            width:{
              xs:isNavOpen ? "50vw" : "0",
              lg:isNavOpen ? "15vw" : "0"

            } ,
            paddingLeft: isNavOpen ? "15px" : "0",
            height: {
              xs:'100vh',
              lg:"87vh",

            },
            background: 'white',
            zIndex: '9999999',
            position: 'fixed',
            top: {
              xs:'0',
              lg:'12.1vh',
            },
            overflow: 'hidden',
            transition: 'width 0.3s ease',
            
          }}
        >
          {isNavOpen && (
            <>
              <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "16px", marginTop: '1.5rem' }}>
                Course
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                How the wine is done?
              </Typography>

              {themes.map((theme, index) => this.renderTheme(index + 1, theme.title, theme.lessons))}

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
                  onClick={addNewTheme}
                >
                  <AddCircleOutlineIcon sx={{ fontSize: '18px' }} /> New Theme
                </button>
              </Box>
            </>
          )}
        </Box>
      </>
    );
  }
}

export default SideNav;
