// script.js
// 이 파일은 현재 수업 지도안 웹페이지에 특별한 동적 기능이 없으므로 비어 있습니다.
// 향후 접기/펴기 기능, 퀴즈, 애니메이션 등 상호작용 요소를 추가할 때 여기에 코드를 작성할 수 있습니다.

document.addEventListener('DOMContentLoaded', () => {
    console.log('수업 지도안 웹페이지가 로드되었습니다.');

    // 모바일 반응형 테이블을 위한 data-label 속성 추가 (CSS에서 사용)
    const tableHeaders = document.querySelectorAll('table thead th');
    const tableRows = document.querySelectorAll('table tbody tr');

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (tableHeaders[index]) { // Ensure header exists for the index
                cell.setAttribute('data-label', tableHeaders[index].textContent);
            }
        });
    });
});