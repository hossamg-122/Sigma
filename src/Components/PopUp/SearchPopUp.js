import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Overlay2,
  PopUp2,
  SearchBar,
  SearchResultLink,
} from "./style";
import { GET_ALL_PRODS } from "../../app/Actions/index";
class SearchPopUp extends Component {
  state = {
    searchTerm: "",
    resultsDisplay: "none",
    searshResults: [],
  };

  isValidString = (searchTerm) => {
    if (/\S/.test(searchTerm)) {
      this.updateSearshResults(searchTerm);
      return true;
    } else {
      return false;
    }
  };

  onSearchInput = (e) => {
    var searchTerm = e.target.value;
    this.setState({ searchTerm: searchTerm });
    if (this.isValidString(searchTerm)) {
      this.setState({ resultsDisplay: "block" });
    } else {
      this.setState({ resultsDisplay: "none" });
    }
  };

  updateSearshResults = (searchTerm) => {
    if (this.props.gstate.allProds.allProds[0]) {
      var results = this.props.gstate.allProds.allProds.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.setState({ searshResults: results });
    }
  };

  searchSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    var that = this;
    return (
      <>
        <Overlay2 onClick={this.props.remove} />
        <PopUp2>
          <form onSubmit={this.searchSubmit}>
            <SearchBar
              style={{}}
              type="text"
              name="searchTerm"
              placeholder="what do you need ? "
              autoComplete="off"
              value={that.state.searchTerm}
              onChange={this.onSearchInput}
            />
            <button
              type="submit"
              style={{
                height: "48px",
                border: "none",
                width: "15%",
                background: "rgb(170, 44, 74)",
                padding: "0px 22px 0px 0px",
                borderRadius: "0px 18px 18px 0px",
                outline: "none",
              }}
              onClick={this.searchSubmit}
            >
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                }}
              />
            </button>
          </form>
        </PopUp2>

        <Scrollbars
          style={{ display: this.state.resultsDisplay }}
          className="scrollBox"
          renderThumbVertical={(props) => (
            <div
              {...props}
              style={{ backgroundColor: "#AA2C4A", borderRadius: "10px" }}
            />
          )}
        >
          <div style={{ padding: "10px 0px", zIndex: "4000" }}>
            {this.state.searshResults.map((result) => {
              return (
                <>
                  <SearchResultLink
                    target="_blank"
                    to={`/product-details/${result.id}`}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src={result.heroImage}
                      alt={result.name}
                      style={{ width: "70px", margin: "0px 20px 0px 0px" }}
                    />
                    <span style={{ color: "black" }}>
                      {result.name}
                      <br /> £ {Math.ceil(result.price - result.discount).toFixed(2)}
                    </span>
                  </SearchResultLink>

                  <br />
                </>
              );
            })}
          </div>
        </Scrollbars>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_ALL_PRODS,
})(SearchPopUp);
