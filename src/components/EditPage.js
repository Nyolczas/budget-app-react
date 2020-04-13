import React from 'react';

const EditPage = (props) => {
    console.log(props);
    return (
    <div>
      <h2>Szerkesztés ({props.match.params.id})</h2>
    </div>
    );
};

export default EditPage;