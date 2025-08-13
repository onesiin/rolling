document.addEventListener('DOMContentLoaded', () => {
  const addNoteButton = document.getElementById('addNoteButton');
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close-button');
  const addNoteForm = document.getElementById('addNoteForm');
  const paperList = document.getElementById('paper-list');

  // 모달 열기
  addNoteButton.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // 모달 닫기
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    addNoteForm.reset();
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
      addNoteForm.reset();
    }
  });

  // 폼 제출 시 롤링페이퍼 노트 추가
  addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const authorName = document.getElementById('author-name').value;
    const authorRelation = document.getElementById('author-relation').value;
    const noteMessage = document.getElementById('note-message').value;

    // 새로운 노트 요소 생성
    const newNote = createNoteElement(authorName, authorRelation, noteMessage);

    // '추가' 버튼 앞에 새로운 노트 추가
    paperList.insertBefore(newNote, addNoteButton);

    // 모달 닫기 및 폼 초기화
    modal.style.display = 'none';
    addNoteForm.reset();
  });

  // 롤링페이퍼 노트 HTML을 생성하는 함수
  function createNoteElement(author, relation, message) {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    // 프로필 이미지는 랜덤으로 생성하거나, 이미지를 직접 업로드하는 기능 추가 가능
    const profileImageURL = `https://i.pravatar.cc/150?u=${author}`;
    const currentDate = new Date().toISOString().split('T')[0];

    noteCard.innerHTML = `
            <div class="note-header">
                <div class="profile-image">
                    <img src="${profileImageURL}" alt="${author}의 프로필 사진">
                </div>
                <div class="author-info">
                    <h4>From. ${author}</h4>
                    <span class="relation-tag">${relation}</span>
                </div>
            </div>
            <div class="note-content">
                <p>${message}</p>
            </div>
            <div class="note-footer">
                <span class="note-date">${currentDate}</span>
            </div>
        `;

    return noteCard;
  }
});
