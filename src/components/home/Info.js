import React from 'react';
import { Link } from 'gatsby'
import Title from '../globals/Title'

export default function Info () {
  return (
    <section className="py-5">
      <div className="container">
      <Title title="our great story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem gipsum dolor sit amet, consectetur adipisicing elit. Nihil minus beatae fuga culpa voluptate fugit. Dolor reprehenderit hic, nulla iure sit odit perferendis, repudiandae dolores quae illum placeat natus suscipit possimus tempora facilis. Minus voluptatum iusto laudantium et, magnam, laborum, consectetur, quasi quidem praesentium in ullam rerum dolor quo excepturi.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
