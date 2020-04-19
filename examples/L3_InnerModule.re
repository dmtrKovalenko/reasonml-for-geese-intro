let fromFile = 15;

module InnerFromFile = {
  let fromInnerModule = 15;

  module Gusi = {
    include Js;
    
    let fromGusi = 15;
  }
}