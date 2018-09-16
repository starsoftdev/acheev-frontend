import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import {
  TopBanner, Heading,
  Page, TitleHolder,
  Title, BoxTitle,
  SecondRowContainer, SecondRowBox,
  ButtonRow, SubmitButton,
  OtherButton, FirstBoxWithOneEntry,
  JobNameInputFullWidth, DropzoneText,
  FinalMessage
} from '../NewOffer/NewOfferStyle'

import Dropzone from 'react-dropzone'

import { Icon } from 'semantic-ui-react'

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class NewCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      descriptionEditorState: EditorState.createEmpty(),
      projectEditorState: EditorState.createEmpty(),
      pictures: [],
      files: []
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDescriptionEditorStateChange = (descriptionEditorState) => {
    this.setState({
      descriptionEditorState,
    });
  };

  onProjectEditorStateChange = (projectEditorState) => {
    this.setState({
      projectEditorState,
    });
  };

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    const { descriptionEditorState, projectEditorState } = this.state;
    return (
      <div>
        <Header />
        <TopBanner>
          <Heading>
            Course Creation
          </Heading>
        </TopBanner>
          <Page>
            <TitleHolder>
              <Title>
                Basic Information
              </Title>
            </TitleHolder>
            <FirstBoxWithOneEntry>
              <BoxTitle>
                Course Title
              </BoxTitle>
              <JobNameInputFullWidth placeholder="Type course title here" />
            </FirstBoxWithOneEntry>
            <SecondRowContainer>
              <SecondRowBox>
                <BoxTitle>
                  Category
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none", WebkitAppearance: "none", WebkitBorderRadius: "0px" }}>
                  <option value="">Select A Category <Icon name="arrow down"/></option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </SecondRowBox>
              <SecondRowBox>
                <BoxTitle>
                  Sub-Category
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none", WebkitAppearance: "none", WebkitBorderRadius: "0px" }}>
                  <option value="">Select A Sub-Category <Icon name="arrow down"/></option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </SecondRowBox>
            </SecondRowContainer>
            <SecondRowContainer>
              <SecondRowBox>
                <BoxTitle>
                  Course Type
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none", WebkitAppearance: "none", WebkitBorderRadius: "0px" }}>
                  <option value="">Select A Type <Icon name="arrow down"/></option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </SecondRowBox>
              <SecondRowBox>
                <BoxTitle>
                  Level
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none", WebkitAppearance: "none", WebkitBorderRadius: "0px" }}>
                  <option value="">Select A Level <Icon name="arrow down"/></option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </SecondRowBox>
            </SecondRowContainer>
            <SecondRowContainer>
              <SecondRowBox>
                <BoxTitle>
                  Course Skills
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none", WebkitAppearance: "none", WebkitBorderRadius: "0px" }}>
                  <option value="">Select Options <Icon name="arrow down"/></option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </SecondRowBox>
            </SecondRowContainer>
            <TitleHolder>
              <Title>
                Course Description
              </Title>
            </TitleHolder>
              <Editor
                editorState={descriptionEditorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onDescriptionEditorStateChange}
                toolbarStyle={{
                  width: "770px",
                  boxShadow: "7px 3px 17px 0 rgba(0, 0, 0, 0.04)",
                  marginBottom: "0",
                  marginTop: "30px"
                }}
                editorStyle={{
                  width: "780px",
                  height: "400px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                  boxShadow: "7px 3px 17px 0 rgba(0, 0, 0, 0.04)",
                }}
              />
            <TitleHolder>
              <Title>
                Course Project
              </Title>
            </TitleHolder>
              <Editor
                editorState={projectEditorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onProjectEditorStateChange}
                toolbarStyle={{
                  width: "770px",
                  boxShadow: "7px 3px 17px 0 rgba(0, 0, 0, 0.04)",
                  marginBottom: "0",
                  marginTop: "30px"
                }}
                editorStyle={{
                  width: "780px",
                  height: "400px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                  boxShadow: "7px 3px 17px 0 rgba(0, 0, 0, 0.04)",
                }}
              />
            <TitleHolder>
              <Title>
                Gallery
              </Title>
            </TitleHolder>
            <Dropzone onDrop={this.onDrop} style={{ marginTop: "30px", width: "770px", boxShadow: "7px 3px 17px 0 rgba(0, 0, 0, 0.04)", height: "300px", border: "0", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Icon name="video camera" style={{ textAlign: "center", fontSize: "30px", margin: "auto", marginBottom: "0" }}/>
                <DropzoneText>Drag your videos or pictures here.</DropzoneText>
            </Dropzone>
            <FinalMessage>
            Acheev course average 20-60 minutes total running time, divided into short video lessons of 2-5 minutes each. <br/>
            To publish your course, the combined length of all your videos must total at least 10 minutes. <br/>
            Teachers may upload a maximum of 1 class per week.
            </FinalMessage>
            <ButtonRow>
              <SubmitButton>Submit</SubmitButton>
              <OtherButton>Discard</OtherButton>
              <OtherButton>Preview</OtherButton>
            </ButtonRow>
          </Page>
        <Footer />
      </div>
    )
  }
}

export default NewCourse