import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import {
  TopBanner, Heading,
  Page, TitleHolder,
  Title, FirstBox,
  FirstBoxHalf, BoxTitle,
  JobNameInput, SecondRowContainer,
  SecondRowBox, EditorScale
} from './NewCourseStyle'

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class NewCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Header />
        <TopBanner>
          <Heading>
            Post Offer
          </Heading>
        </TopBanner>
          <Page>
            <TitleHolder>
              <Title>
                Basic Information
              </Title>
            </TitleHolder>
            <FirstBox>
              <FirstBoxHalf>
                <BoxTitle>
                  Job Name
                </BoxTitle>
                <JobNameInput placeholder="Type Job Name Here" />
              </FirstBoxHalf>
              <FirstBoxHalf>
                <BoxTitle>
                  Category
                </BoxTitle>
                <select className="ui dropdown" style={{ marginTop: "17px", width: "70%", backgroundColor: "white", border: "none", borderBottom: "solid 1px #14293d", borderRadius: "none" }}>
                  <option value="">Select A Category</option>
                  <option value="Tech">Tech</option>
                  <option value="Social">Social</option>
                </select>
              </FirstBoxHalf>
            </FirstBox>
            <SecondRowContainer>
              <SecondRowBox>
                <BoxTitle>
                  Price (USD)
                </BoxTitle>
                <JobNameInput placeholder="Enter Your Price Here" />
              </SecondRowBox>
              <SecondRowBox>
                <BoxTitle>
                  Time of Delivery
                </BoxTitle>
                <JobNameInput placeholder="Enter Your Time Of Delivery Here In Days" style={{ width: "85%" }}/>
              </SecondRowBox>
            </SecondRowContainer>
            <TitleHolder>
              <Title>
                Description
              </Title>
            </TitleHolder>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
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
          </Page>
        <Footer />
      </div>
    )
  }
}

export default NewCourse