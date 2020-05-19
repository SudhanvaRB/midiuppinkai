function openNav() {
    document.getElementById("mySidenav").style.width = "175px";
    document.getElementById("mySidenav").style.paddingTop = "50px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function openTitle() {
 const container = document.querySelector('#container');
 const content = document.createElement('div');
 content.classList.add('content');
 content.textContent = "this is text content";
 container.appendChild(content);
 content.style.cssText = 'color: white; font-size: 4rem; background: red ; padding-left:150px'; 

}