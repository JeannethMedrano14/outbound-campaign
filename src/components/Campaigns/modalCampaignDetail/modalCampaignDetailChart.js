import React, { useRef, useEffect } from 'react';
import * as joint from 'jointjs';

const TreeDiagram = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
      el: containerRef.current,
      model: graph,
      width: '100%',
      height: 400,
      gridSize: 10,
      drawGrid: { name: 'dot', args: { color: 'black', thickness: 1 } },
    });

    const rect = (x, y, w, h, txt, fill) =>
  new joint.shapes.standard.Rectangle({
    position: { x, y },
    size: { width: w, height: h },
    attrs: {
      body: { fill: fill, rx: 10, ry: 10 },
      label: { 
        text: txt, 
        fill: 'white', 
        'font-size': 16,
        'font-weight': 'bold',
        'font-family': 'Arial',
        'text-anchor': 'middle',
        'y-alignment': 'middle'
      },
    },
  });

    const link = (source, target) =>
      new joint.shapes.standard.Link({
        source: { id: source.id },
        target: { id: target.id },
        attrs: {
          line: { stroke: 'black', strokeWidth: 1 },
        },
        connector: {
          name: 'rounded',
          args: {
            radius: 5,
          },
        },
        markup: [
          '<path class="connection" stroke="black" fill="none" d="M 0 0 0 0"/>',
        ].join(''),
        smooth: true,
        connector: {
          name: 'rounded',
          args: { radius: 5 },
        },
        router: { name: 'manhattan' },
      });

    const root = rect(20, 25, 180, 40, 'Enviados  100%  250', '#5A6872');
    const child1 = rect(130, 130, 180, 40, 'Entregados 80%', '#3780C3');
    const child2 = rect(130, 300, 180, 40, 'No entregados 20%', '#F99F4B');
    const grandchild1 = rect(250, 180, 180, 40, 'Leídos 75%', '#37C366');
    const grandchild2 = rect(250, 350, 180, 40, 'Fallidos 5%', '#F94B4B');

    const elements = [root, child1, child2, grandchild1, grandchild2];
    const links = [
      link(root, child1),
      link(root, child2),
      link(child1, grandchild1),
      link(child2, grandchild2),
    ];

    elements.forEach((element) => {
      graph.addCell(element);
    });

    links.forEach((link) => {
      graph.addCell(link);
    });
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default TreeDiagram;
