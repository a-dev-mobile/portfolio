#!/bin/bash

# Путь к исполняемому файлу
#SCRIPT_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/generate-directory-tree-py/build.sh" && chmod +x $SCRIPT_PATH && $SCRIPT_PATH
# Активируем виртуальное окружение
source /home/dmitriy/.venv/bin/activate
# Аргументы
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/kidneysmart_rust/src/routes/v1/recommendations"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/kidneysmart_rust/src"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/kidneysmart_rust/src/routes/v1/submit"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/kidneysmart_rust"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/scripts/scripts/ollama/results_20250103_094356"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/scripts/scripts/ollama/test_bmi/results_20250103_101452"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/scripts/scripts/personal/save/.config/mc"
PROJ_PATH="/home/dmitriy/Documents/DEV/MY_GITHUB/portfolio-ru/"
FILE_NAMES=(
    "*.tsx"
    "postcss.config.js"
    "tailwind.config.ts"
    "tsconfig.json"
    "package.json"
    "next.config.js"
    ".eslintrc.json"
    "*.css"
    # "Makefile"
    # "Dockerfile"
    # "nginx.conf"
)
EXCLUDE=(
    "*.g.dart"
    ".next"
    "public"
    "out"
    
    "android"
    "build"
    "assets"
    ".git"
    ".fvm"
    ".vscode"
    "node_modules"
    
    "obj"
    "bin"
    ".sqlx"
    "target"
    "ci"
    ".run"
    "directory_structure.log"
)
# LOG_FILE="directory_structure.log" # Файл для сохранения лога, если не указан - лог сохраняется в консоль. Если пусто, лог сохраняется в файл по умолчанию в указанной директории.
EXCLUDE_STRINGS=(
    
)
LOG_LEVEL="INFO"                      # Уровень логирования (допустимые значения: DEBUG, INFO, WARNING, ERROR, CRITICAL)
OUTPUT_FILE="directory_structure.log" # Файл для сохранения вывода, если пусто, сохраняется в файл по умолчанию в указанной директории.
DISPLAY="all"                    # Опции: structure, count, content, all (default: all)
DISPLAY="content"
# Запуск скрипта с аргументами
python /home/dmitriy/Documents/DEV/MY_GITHUB/scripts/scripts/personal/generate_directory_tree.py \
--path "$PROJ_PATH" \
--file-names "${FILE_NAMES[@]}" \
--exclude "${EXCLUDE[@]}" \
--log-level "$LOG_LEVEL" \
--display "$DISPLAY" \
--output-file "$OUTPUT_FILE" \
--exclude-strings "${EXCLUDE_STRINGS[@]}"  # Новый аргумент для исключаемых подстрок

# Деактивируем виртуальное окружение
deactivate

