
import React, { useEffect, useState } from 'react';
import PieChartWidget from './widgets/piechart-widget';
import LineChartWidget from './widgets/linechart-widget';
import NumericWidget from './widgets/numeric-widget';
import HTMLWidget from './widgets/htmlContent-widget';

const DashboardBuilder = ({ config }) => {
  const [widgetsWithPriority, setWidgetsWithPriority] = useState([]);
  const [widgetsWithOrder, setWidgetsWithOrder] = useState([]);
  useEffect(() => {
    const sortedWidgets = config.widgets.sort((a, b) => a.priority - b.priority);
    setWidgetsWithPriority(sortedWidgets);
  }, [config]);



  useEffect(() => {
    widgetsWithPriority.forEach((widget) => {
      if (widget.data) {
        fetch(widget.data)
          .then((response) => response.json())
          .then((data) => {
            const updatedWidgets = widgetsWithPriority.map((w) => {
              if (w === widget) {
                return { ...w, data };
              }
              return w;
            });
            setWidgetsWithPriority(updatedWidgets)
          })
          .catch((error) => {
            console.error(`Error fetching data for widget: ${widget.title}`, error);
          });
      }
    });
    const dummyWidgetsArray = [...widgetsWithPriority];
    dummyWidgetsArray.sort((a, b) => a.order - b.order);
    setWidgetsWithOrder(dummyWidgetsArray)
  }, [widgetsWithPriority]);




  return (
    <div style={{ marginLeft: '40px', marginRight: '40px', backgroundColor: '#f9f6f6', display: 'flex', height: '100vh', flexWrap: 'wrap' }}>
      {widgetsWithOrder.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </div>
  );
};

// Define the Widget component
const Widget = ({ widget }) => {
  const { type, title, data, size } = widget;

  // Render the widget based on its type
  switch (type) {
    case 'Chart-Pie':
      return <PieChartWidget title={title} data={data} size={size} />;
    case 'Chart-Line':
      return <LineChartWidget title={title} data={data} size={size} />;
    case 'Numeric':
      return <NumericWidget title={title} data={data} size={size} />;
    case 'HTML':
      return <HTMLWidget data={data} size={size} />
    default:
      return null;
  }
};

export default DashboardBuilder;
