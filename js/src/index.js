import '../../css/src/index.css';


$('.selectors li').on('dragstart', ev => {
    console.log(ev);
    ev.originalEvent.dataTransfer.setData('text/plain', ev.target.id);
    ev.originalEvent.dataTransfer.dropEffect = 'link';
});
$('.selectors li').on('dragover', () => {
    console.log('dragover');
});
$('.selectors li').on('drop', () => {

});
$('.selectors li').on('dragenter', ev => {
    ev.target.style.borderWidth='2px';
});

const img = $('<svg class="col-12" width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"/>'),
    line = $('<line stroke-width="1" stroke="black"/>');
img.css({height: '500px'});
line.attr('x1', 10)
    .attr('y1', 10)
    .attr('x2', 20)
    .attr('y2', 20);
img.append(line);
$('#lines').append(img);
