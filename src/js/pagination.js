const paginationEl = document.querySelector('#pagination');

let currentPage = 0;

export function renderPagination(totalPages, renderEvents) {
  paginationEl.innerHTML = '';

  let startPos = currentPage - 2;
  let renderCount = totalPages < 5 ? totalPages : 5;

  if (totalPages > 6) {
    if (currentPage <= 3) {
      startPos = 0;
    }

    if (currentPage + 3 > totalPages) {
      startPos = totalPages - 5;
    }
  } else {
    startPos = 0;
  }

  if (currentPage > 3 && totalPages > 5) {
    createButton(1, false, () => setCurrentPage(0, renderEvents));
    createButton('...', false, () =>
      setCurrentPage(currentPage - 3, renderEvents)
    );
  }

  for (let i = startPos; i < startPos + renderCount; i++) {
    createButton(i + 1, currentPage === i, () =>
      setCurrentPage(i, renderEvents)
    );
  }

  if (currentPage + 3 < totalPages && totalPages > 5) {
    createButton('...', false, () =>
      setCurrentPage(currentPage + 3, renderEvents)
    );
    createButton(totalPages, false, () =>
      setCurrentPage(totalPages - 1, renderEvents)
    );
  }
}

function createButton(content, active = false, handleClick) {
  const liElement = document.createElement('li');
  liElement.classList.add('pagination__page-button');
  liElement.innerHTML = content;

  if (active) {
    liElement.classList.add('pagination__page-button_active');
  }

  if (handleClick) {
    liElement.addEventListener('click', handleClick);
  }

  paginationEl.append(liElement);
}

export function setCurrentPage(number, renderEvents) {
  currentPage = number;
  renderEvents(currentPage);
}

export function clearPagination() {
  paginationEl.innerHTML = '';
}
