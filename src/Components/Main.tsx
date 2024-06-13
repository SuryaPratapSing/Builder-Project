import React, { Component } from "react";
import { Box } from "@mui/material";
import SideNav from "./SideNav";
import Theme1 from "./Theme1";
import CourseInformation from "./CourseInformation";

interface Theme {
  title: string;
  lessons: number[];
}

interface State {
  themes: Theme[];
}

class Main extends Component<{}, State> {
  state: State = {
    themes: [
      { title: "Theme 1", lessons: [1, 2, 3, 4] },
    ],
  };

  addNewTheme = () => {
    this.setState((prevState) => ({
      themes: [
        ...prevState.themes,
        { title: `Theme ${prevState.themes.length + 1}`, lessons: [] },
      ],
    }));
  };

  render() {
    const { themes } = this.state;

    return (
      <Box sx={{ display: "flex",justifyContent:'space-between', flexDirection: "row",background:'#e0e0e0' }}>
        <SideNav themes={themes} addNewTheme={this.addNewTheme} />
        <Box sx={{ flexGrow: 1 ,marginTop:'15vh',marginLeft:'16vw'}}>
            <CourseInformation/>
          {themes.map((theme, index) => (
            <Theme1 key={index} title={theme.title} lessons={theme.lessons} />
          ))}
        </Box>
      </Box>
    );
  }
}

export default Main;
