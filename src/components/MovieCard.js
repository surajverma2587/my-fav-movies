export const MovieCard = ({ imageUrl, title }) => {
  return (
    <div class="card movie-card m-3">
      <img src={imageUrl} class="card-img-top" alt={title} />
      <div class="card-body text-center">
        <h5 class="card-title">{title}</h5>
        <button type="button" class="btn btn-primary">
          Add to fav
        </button>
      </div>
    </div>
  );
};
