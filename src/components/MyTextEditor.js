import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    textBoxContainer: {
        margin: "0 auto",
        width: "35vw",
        minWidth: "400px",

    }
}))

export default function MyTextEditor() {
    const classes = useStyles();
    const [editorState, setEditorState] = React.useState(
      EditorState.createEmpty()
    );

    const editor = React.useRef(null);

    function focusEditor() {
      editor.current.focus();
    }

    React.useEffect(() => {
      focusEditor()
    }, []);
    return (
        <div className={classes.textBoxContainer}>
            <Typography>
                Whats on your mind?
            </Typography>
            <div onClick={focusEditor}>
                <Editor
                ref={editor}
                editorState={editorState}
                onChange={editorState => setEditorState(editorState)}
                />
            </div>
      </div>
    );
  }
