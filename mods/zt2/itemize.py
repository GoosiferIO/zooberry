import yaml
import os
from datetime import datetime
from pathlib import Path
from dateutil import parser

def get_yaml_header(content):
    parts = content.split('---')
    if len(parts) > 2:
        return parts[1]  # Return the content between the first two '---' markers
    return None  # No valid YAML header found

def get_markdown_items(start_directory):
    today = datetime.now().date()
    categories = {}

    for root, dirs, files in os.walk(start_directory):
        for file_name in files:
            if file_name.endswith('.md'):
                file_path = Path(root) / file_name
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()

                header = get_yaml_header(content)
                if header:
                    yaml_data = yaml.safe_load(header)

                    # Check the date
                    date = yaml_data.get('date')
                    if isinstance(date, datetime):
                        date = date.date()
                    elif isinstance(date, str):
                        try:
                            date = parser.parse(date).date()
                        except ValueError:
                            print(f"Invalid date format in file: {file_path}")
                            continue
                    else:
                        continue

                    if date == today:
                        title = yaml_data.get('title', 'Untitled')
                        category_path = list(file_path.relative_to(start_directory).parts[:-1])  # Exclude the file name
                        formatted_category_path = ['Mods'] + [' '.join(part.replace('-', ' ').title() for part in category_path)]
                        category = ' / '.join(formatted_category_path)
                        link_path = '/'.join(category_path)
                        link = f'https://www.zooberry.org/mods/zt2/{link_path}'
                        author = format_authors(yaml_data.get('author', 'Unknown'))
                        categories.setdefault(category, []).append(f"- [{title}]({link}) by {author}")

    return categories

def format_authors(authors):
    if isinstance(authors, list):
        if len(authors) > 1:
            return ', '.join(authors[:-1]) + ', and ' + authors[-1]
        return authors[0]
    return authors

def write_markdown_list(categories, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        for category, items in categories.items():
            headers = category.split(' / ')
            for i, header in enumerate(headers, start=1):
                file.write('#' * i + ' ' + header + '\n')
            for item in items:
                file.write(item + '\n')
            file.write('\n')

if __name__ == "__main__":
    categories = get_markdown_items('.')
    write_markdown_list(categories, 'output.md')
