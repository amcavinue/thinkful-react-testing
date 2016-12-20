var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Image = require('../js/components/image');
var Gallery = require('../js/components/gallery');

describe('Image component', function() {
    it('Renders the image and description',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        var img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        var p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

describe('Gallery component', function() {
    it('Renders the images with props', function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery 
            images={
                [
                    {
                        url: 'www.abc.com/image.jpg',
                        description: 'abc image'
                    },
                    {
                        url: 'www.def.com/image.jpg',
                        description: 'def image'
                    }
                ]
                
            } />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(2);
        
        var img1 = result.props.children[0];
        img1.props.url.should.equal('www.abc.com/image.jpg');
        img1.props.description.should.equal('abc image');
    });
});
