import React, { Component } from 'react';
import CardCats from '../../components/Cards/Card';
import axios from 'axios';
import ButtonGetCat from '../../components/Button/ButtonCats';

import '../../assets/scss/mainStyle/main.css';
import '../../assets/scss/buttonStyle/buttonSttle.css';

class Home extends Component {
  state = {
    data: [],
    filterCats: []
  };
  componentDidMount() {
    this.getCatsData();
  }
  getCatsData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data: data
      });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    }
  };

  getCatsList = () => {
    if (this.state.filterCats.length > 0) {
      return this.state.filterCats.map((cat) => (
        <CardCats key={cat.id} images={cat.id} cats={cat} />
      ));
    }

    return this.state.data?.map((cat) => <CardCats key={cat.id} cats={cat} idCat={cat.id} />);
  };

  bringCatsOrigin = (origin) => {
    const response = this.state.data.filter((cat) => {
      return cat.origin === origin;
    });
    if (response) {
      this.setState({
        filterCats: response
      });
    }
  };

  getOriginCats = () => {
    var reduced = [];
    this.state.data.forEach((cat) => {
      var duplicated =
        reduced.findIndex((redCat) => {
          return cat.origin == redCat.origin;
        }) > -1;

      if (!duplicated) {
        reduced.push(cat);
      }
    });
    return reduced.map((country) => (
      <ButtonGetCat
        cats={country}
        key={country.country_codes}
        onClick={() => this.bringCatsOrigin(country.origin)}
      />
    ));
  };

  render() {
    return (
      <main>
        <h1>Cats Paradise</h1>
        <div>
          <span>Tem exatamente {this.state.data.length} gatos nessa API</span>
        </div>
        <div className="buttons-cats">
          <h3>Filtre aqui</h3>
          {this.getOriginCats()}
        </div>

        <ul>{this.getCatsList()}</ul>
      </main>
    );
  }
}

export default Home;
