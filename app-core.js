const recipes = [
    {
        id: 1,
        name: "Hearty Vegetable Stew",
        image: "Food images/stew.png",
        category: "Vegetarian",
        difficulty: "Easy",
        difficultyClass: "bg-success",
        ingredients: ["Carrots", "Potatoes", "Celery", "Onions", "Vegetable Broth", "Herbs"],
        instructions: "Chop vegetables, sauté onions, add broth and simmer for 40 minutes until tender."
    },
    {
        id: 2,
        name: "Protein-Packed Quinoa Bowl",
        image: "Food images/quinoa.png",
        category: "High Protein",
        difficulty: "Medium",
        difficultyClass: "bg-warning",
        ingredients: ["Quinoa", "Chickpeas", "Spinach", "Avocado", "Lemon Tahini Dressing"],
        instructions: "Cook quinoa, toss with chickpeas and spinach. Top with avocado and dressing."
    },
    {
        id: 3,
        name: "Classic Berry Tart",
        image: "Food images/tart.png",
        category: "Dessert",
        difficulty: "Hard",
        difficultyClass: "bg-danger",
        ingredients: ["Flour", "Butter", "Mixed Berries", "Sugar", "Vanilla Custard"],
        instructions: "Prepare pastry, bake blind. Fill with custard and top with fresh berries."
    },
    {
        id: 4,
        name: "Mushroom Risotto",
        image: "Food images/risotto.png",
        category: "Vegetarian",
        difficulty: "Medium",
        difficultyClass: "bg-warning",
        ingredients: ["Arborio Rice", "Mushrooms", "Parmesan", "White Wine", "Shallots"],
        instructions: "Slowly add broth to toasted rice and mushrooms, stirring constantly until creamy."
    }
];

function renderRecipes(filteredList) {
    const container = document.getElementById('recipeContainer');
    if (!container) return;

    container.innerHTML = filteredList.map(recipe => `
        <div class="col-md-4 mb-4 fade-in">
            <div class="card recipe-card h-100 shadow-sm border-0">
                <div class="position-relative">
                    <img src="${recipe.image}" class="card-img-top" style="height:220px; object-fit:cover;">
                    <div class="position-absolute top-0 end-0 p-2 d-flex flex-column gap-1">
                        <span class="badge bg-white text-dark opacity-75 shadow-sm">${recipe.category}</span>
                        <span class="badge ${recipe.difficultyClass} shadow-sm">${recipe.difficulty}</span>
                    </div>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold mb-3">${recipe.name}</h5>
                    <button class="btn btn-sm btn-primary-custom mt-auto w-100" onclick="showRecipe(${recipe.id})">View Recipe Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    const modalTitle = document.getElementById('recipeModalLabel');
    const modalBody = document.getElementById('recipeModalBody');

    if (recipe && modalTitle && modalBody) {
        modalTitle.innerText = recipe.name;
        modalBody.innerHTML = `
        <img src="${recipe.image}" class="img-fluid rounded mb-3 shadow-sm" style="width:100%; height:300px; object-fit:cover;">

        <div class="recipe-content p-2">
            <h6><strong class="text-primary-custom">Ingredients:</strong></h6>
            <ul class="mb-4">${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>

            <hr>

            <h6><strong class="text-primary-custom">Instructions:</strong></h6>
            <p class="mb-0 text-muted">${recipe.instructions}</p>
        </div>
        `;
        const myModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        myModal.show();
    }
}

