  //query selector (always takes hold of the first element matching the name/id/class)
        /*
        selectors
        -tag name
        -id #
        -class .
        */

        // query selector using tag name
        // const body = document.querySelector("body")
        // console.log(body.innerHTML);
        // body.innerHTML = '<h1>Blocked</h1>'
        // this will remove the rest of the code in the body with the given code.

        // const div = document.querySelector("div")
        // div.innerHTML = '<h1>This div is hacked</h1>'
        //will take hold of the first div written in the html code and change the value


        // query selector using id #

        // const username = document.querySelector('#username');
        // console.log(username.innerText);
        // username.innerText = 'Sanidhya Singh Pundeer';

        // query selector using class .

        const ele = document.querySelector('div');
        const eles = document.querySelectorAll('div');//returns all the elements with div name, returns a nodelist 
        console.log(ele);
        console.log(ele.children);// returns the children of the element
        console.log(ele.parentElement);// returns the parent of the element
        console.log(ele.parentElement.children);// returns the children of the parent of the element (siblings)




