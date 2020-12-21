import React from 'react'
var nameArray = ['alexandra', 'andrew', 'anne', 'cathrine']

export default class Sidebar extends React.Component {
//Filter Selection    
filterSelection = (c) => {
    var x, i;
    x = document.getElementsByClassName("row");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    this.removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) this.addClass(x[i], "show");
    }
}

// Show filtered elements
addClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

// Hide elements that are not selected
removeClass = (element, name) => {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}

render(){
    console.log(nameArray)
    return (
        <>
            <div className="sidebar">

                <a href="#" onClick={() => this.filterSelection('all')}> Show all</a>
                {nameArray.map(project => <a href="#" key={project} onClick={() => { this.filterSelection(`${project}`); }}>{project}</a>)}

                {/*<button className="btn" onClick={() => this.filterSelection('alexandra')}> Alexandra</button> */}

            </div>
        </>
    )
}
}

