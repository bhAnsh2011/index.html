window.addEventListener("DOMContentLoaded", function() {
    // Data
    const data = [
        { color: 'blue' }, { color: 'blue' }, { color: 'blue' }, { color: 'blue' },
        { color: 'black' }, { color: 'black' }, { color: 'black' }
    ];

    // Set dimensions and margins
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    // Append SVG object to the body
    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    // Pie generator
    const pie = d3.pie()
        .value(1)
        .sort(null);

    // Arc generator
    const arc = d3.arc()
        .innerRadius(radius - 50)
        .outerRadius(radius - 30);

    // Create pie chart
    svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'white')
        .style('stroke-width', '2px');

    // Add text in the middle
    svg.append('text')
        .attr('text-anchor', 'middle')
        .style('font-size', '24px')
        .text('7');
});
