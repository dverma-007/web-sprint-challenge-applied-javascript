const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //instantiating the elements
  const header = document.createElement('div');
  const hDate = document.createElement('span');
  const hTitle = document.createElement('h1');
  const hTemp = document.createElement('span');

  //setting the class names
  header.classList.add('header');
  date.classList.add('date');
  temp.classlist.add('temp');

  //setting the hierarchy
  header.appendChild(hDate);
  header.appendChild(hTitle);
  header.appendChild(hTemp);

  //setting the attributes and text
  date.textContent = `${date}`;
  title.textContent = `${title}`;
  temp.textContent = `${temp}`;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
}

export { Header, headerAppender }
