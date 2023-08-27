
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  return (
    <div className='categories-container'>

      { categories.map((catobj) => (                        //categories.map(({ title }) directly title prop ko get grom obj
        <div className='category-obj-container'>
          <div className='background-image' />
          <div className='category-body-container'>
            <h2>{catobj.title}</h2>                   {/* // <h2>{catobj.title}</h2>     */}
            <p>Shop Now</p>
          </div>
        </div>
      ))}

    </div>
  );
};
export default App;
