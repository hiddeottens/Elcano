import React from 'react';
import './loader.css';

export interface LoaderProps {
  children?: any;
};

export default function Loader(props: LoaderProps) {
  return (
    <div style={{ marginTop: 150 }}>
      {props.children}
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}
