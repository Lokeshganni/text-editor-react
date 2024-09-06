import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {EditButton, Heading} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    txtAreaContent: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  handleTxtArea = event => {
    this.setState({txtAreaContent: event.target.value})
  }

  handleBoldText = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  handleItalicText = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  handleUnderlineText = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {txtAreaContent, isBold, isItalic, isUnderline} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="app-image-container">
            <Heading>Text Editor</Heading>
            <img
              className="text-editor-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="txt-editor-container">
            <ul className="edit-btn-ul-container">
              <li className="edit-btn-li-container">
                <EditButton
                  data-testid="bold"
                  onClick={this.handleBoldText}
                  style={{color: isBold ? '#faff00' : '#f1f5f9'}}
                  type="button"
                  className=""
                >
                  <VscBold className="edit-btn-icon" />
                </EditButton>
              </li>
              <li className="edit-btn-li-container">
                <EditButton
                  data-testid="italic"
                  onClick={this.handleItalicText}
                  style={{color: isItalic ? '#faff00' : '#f1f5f9'}}
                  type="button"
                  className="italic-btn"
                >
                  <GoItalic className="edit-btn-icon" />
                </EditButton>
              </li>
              <li className="edit-btn-li-container">
                <EditButton
                  data-testid="underline"
                  onClick={this.handleUnderlineText}
                  style={{color: isUnderline ? '#faff00' : '#f1f5f9'}}
                  type="button"
                  className="underline-btn"
                >
                  <AiOutlineUnderline className="edit-btn-icon" />
                </EditButton>
              </li>
            </ul>
            <div className="textarea-container">
              <textarea
                onChange={this.handleTxtArea}
                value={txtAreaContent}
                rows="24"
                cols="52"
                style={{
                  fontWeight: isBold ? 'bold' : 'normal',
                  fontStyle: isItalic ? 'italic' : 'normal',
                  textDecoration: isUnderline ? 'underline' : 'normal',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
